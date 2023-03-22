/* eslint-disable react/react-in-jsx-scope */
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { useContext, useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import { Link, useNavigate } from "react-router-dom";
import CardRemmended from "../../../components/CardRemmended";
import CarouselAndCards from "../../../components/Carousel";
import Menu from "../../../components/Menu";
import { AuthContext } from "../../../context/User";
import place from "../../../mockup/places.json";
import { Places } from "../../../types/Places";
import LogoMarker from "../../../assets/Group 333.svg";
import {
  AreaMarker,
  ButtonSearch,
  ContainerSearch,
  HeaderMenuRight,
  ImgUser,
  InputSearch,
  LabelSearch,
  ModalPopup,
  RecommendedSection,
} from "./styles";

export default function Search() {
  const navigate = useNavigate();
  // const [place, setPlace] = useState<Places | any>([]);
  const { loggedUser } = useContext(AuthContext) as any;

  const [inputSearch, setInputSearch] = useState<string>("");

  const [btnMenu, setBtnMenu] = useState<boolean>(true);

  const [centerMap, setCenterMap] = useState<any>({ lat: "", lng: "" });
  const [loading, setLoading] = useState<boolean>(true);

  const darkMode = localStorage.getItem("darkMode");

  const getCurrentPosition = () => {
    // Pegar a posição atual do usuário(navigator.geolocation é nativo do javascript)
    // Recebe dois parâmetros, um deles é um callback, que é chamado quando a posição for obtida e o outro é o erro
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        setCenterMap({ lat: latitude, lng: longitude });
        setLoading(false);
      },
      (err) => {
        console.log(err);
        setLoading(false);
      },
      {
        timeout: 30000,
      }
    );
    if (!darkMode) localStorage.setItem("darkMode", "dark");
  };

  const currentId = (id: any) => {
    console.log("id", id);
    navigate(`/details/${id}`);
  };

  const mapPinIcon = Leaflet.icon({
    iconUrl: LogoMarker,
    iconSize: [80, 80],
  });

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const fillBlueOptions = { fillColor: "blue" };

  return (
    <>
      <ContainerSearch>
        <HeaderMenuRight>
          <LabelSearch>
            <InputSearch
              type="text"
              onChange={(val) => setInputSearch(val.target.value)}
              placeholder="Buscar lugar desejado..."
            />
            <ButtonSearch type="submit">Search</ButtonSearch>
          </LabelSearch>
          <ImgUser onClick={() => setBtnMenu(!btnMenu)}>
            {/* <AiOutlineUser/> */}
            <img
              src={
                loggedUser
                  ? loggedUser.picture
                  : "https://picsum.photos/seed/picsum/200/300"
              }
              alt="Imagem de perfil"
            />
            {!btnMenu ? <Menu /> : null}
          </ImgUser>
        </HeaderMenuRight>
        {centerMap.length > 0 ||
          (!loading && (
            <MapContainer
              scrollWheelZoom={true}
              zoomControl={false}
              center={[centerMap.lat, centerMap.lng]}
              zoom={13}
              markerZoomAnimation={true}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
              }}
              autoPanOnFocus={true}
            >
              {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/${darkMode}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${
                  import.meta.env.VITE_MAPBOX_TOKEN
                }`}
              />
              {place.map((places: any) => (
                <Marker
                  key={places.id}
                  // position={[places.location.lat, places.location.lng]}
                  position={[places.location_lat, places.location_lng]}
                  icon={mapPinIcon}
                  eventHandlers={{
                    click: () => {
                      currentId(places.id);
                    },
                  }}
                  //opacity={0.5}
                >
                  <Tooltip>
                    <h3>{places.place_name}</h3>
                    <p>{places.category}</p>
                  </Tooltip>
                </Marker>
              ))}
            </MapContainer>
          ))}
        {/* <RecommendedSection>
          <CarouselAndCards />
        </RecommendedSection> */}
      </ContainerSearch>
    </>
  );
}
