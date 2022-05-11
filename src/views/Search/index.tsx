import { ContainerSearch,ModalPopup,HeaderMenuRight,RecommendedSection,ImgUser,ArrowButton,AreaMarker,LabelSearch,InputSearch,ButtonSearch } from './styles';
import { MapContainer , TileLayer, Marker, Popup, Circle, Tooltip } from 'react-leaflet';
import { useEffect, useState } from 'react';
import LogoMarker from '../../assets/Frame 3.png';
import Leaflet from "leaflet";
import 'leaflet/dist/leaflet.css';
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosArrowForward,IoIosArrowBack} from 'react-icons/io';
import CardRemmended from '../../components/CardRemmended';
import  {Places} from '../../types/Places';
import Menu from '../../components/Menu';
import { Link, useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const [ place,setPlace ] = useState<Places | any>([]);
  const [ inputSearch,setInputSearch ] = useState<String>('');
  const [ btnMenu,setBtnMenu ] = useState<boolean>(true);

  const [centerMap,setCenterMap] = useState<any>({ lat: '' , lng: ''  });
  const [loading,setLoading] = useState<boolean>(true);

  const getCurrentPosition = () => {
    // Pegar a posição atual do usuário(navigator.geolocation é nativo do javascript)
    // Recebe dois parâmetros, um deles é um callback, que é chamado quando a posição for obtida e o outro é o erro
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setPlace([
          {
            "place_name": "Hotel-Abreu e lima",
            "highlights": [
              2,
              3,
              2,
              4
            ],
            "sku": "54949-004",
            "comments": "testando comentário",
            "imagemUrl": "https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "price": 27,
            "category": "Recife",
            "location": {
              "lat": latitude,
              "lng": longitude
            }
          }
        ]);
        setCenterMap({lat: latitude, lng: longitude});
        setLoading(false);
      },
      err => {
        console.log(err);
        setLoading(false);
      },
      {
        timeout: 30000
      }
    );
  }

  const mapPinIcon = Leaflet.icon({
    iconUrl: LogoMarker,
    iconSize: [55, 55], 
  });

  useEffect(() => {
    getCurrentPosition();
  },[]);

  const fillBlueOptions = { fillColor: 'blue' }

  return (
    <>
      <ContainerSearch>
        <HeaderMenuRight>
          <LabelSearch>
            <InputSearch type='text' onChange={(val)=> setInputSearch(val.target.value)} placeholder="Buscar lugar desejado..."/>
            <ButtonSearch type="submit">Search</ButtonSearch>
          </LabelSearch>
          <ImgUser onClick={() => btnMenu ? setBtnMenu(false) : setBtnMenu(true)}>
            <AiOutlineUser/>
            {!btnMenu ? <Menu/> : null}
          </ImgUser>
        </HeaderMenuRight>

        {centerMap.length > 0 || !loading && (
          <MapContainer 
          scrollWheelZoom={true}
          zoomControl={false}
          center={[centerMap.lat,centerMap.lng]}
          zoom={13}
          markerZoomAnimation={true}
          style={{width:'100%', height:'100%',position: 'absolute',top: '0',left: '0'}}
          autoPanOnFocus={true}
          >
            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`}/>
            {place.map((places:any) => (
              <Marker
                key={places.id}
                position={[places.location.lat, places.location.lng]}
                icon={mapPinIcon}
                eventHandlers={{
                  click: () => {
                    navigate('/details');
                  }
                }}
                opacity={0.5}
                
              >
                <Tooltip>
                  <h3>{places.place_name}</h3>
                  <p>{places.category}</p> 
                </Tooltip>
              </Marker>
            ))}  
          </MapContainer>
        )}

        <RecommendedSection>
          <ArrowButton>
            <IoIosArrowBack/>
            <IoIosArrowForward/>
          </ArrowButton>
          <CardRemmended value={1} data={place}/>
          <CardRemmended value={2} data={place}/>
        </RecommendedSection>
      </ContainerSearch>
    </>
  )
}