import { useEffect, useState } from 'react';
import { Card, CardContent, CardImg,RightEffectDiv} from './styles';
import {AiFillStar} from 'react-icons/ai';
import ImgTest from '../../assets/pessoas em cadeiras de rodas 1.jpg';


export default function CardRemmended(data:any) {
  const [ highlights,setHighlights ] = useState<number>(0);

  const averageHighlights = () => {
    let sum = 0;
    const  cc = data.data.map((item:any,index:any) => {
     sum += item[index].highlights
    });
    console.log(cc)

    setHighlights (sum)
  }
  useEffect(() => {
    averageHighlights();
  },[]);
  console.log(highlights)

  return (
    <>
      <Card>
        {data.data.map((item:any) => (
          <>
            <CardImg>
            <img src={ImgTest} alt='imagem para os comentários do cards' />
            </CardImg>
            <CardContent>
              <h3>{item.place_name}</h3>
              <p>{item.category}</p>
              {Array.from({length: 4}, (_, i) => (
                <AiFillStar size={20} color='#ffd700' key={i} />
              ))} 
              <br/>
              <span>{item.comments}</span>
            </CardContent>
          </>
        ))}
        
      </Card>
    </>
  )
}
  