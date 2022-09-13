import React,{useState} from 'react'
import Body from '../Components/Body';
import Title from '../Components/Title';

function Root() {
  const [fruit] = useState([
    {
      id: 1,
      name: 'Apple',
      img: 'https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg',
    },
    {
      id: 2,
      name: 'Apricot',
      img: 'https://st3.depositphotos.com/3260227/12887/i/950/depositphotos_128871518-stock-photo-one-ripe-apricot.jpg',
    },
    {
      id: 3,
      name: 'Avocado',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEred8KCMI2YG8biGLk7hkbQIoDJfhDiUG1w&usqp=CAU',
    },
    {
      id: 4,
      name: 'Banana',
      img: 'https://cdn4.vectorstock.com/i/1000x1000/77/33/single-banana-isolated-vector-20497733.jpg',
    },
    {
      id: 5,
      name: 'Cherry',
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Cherry_season_%2848216568227%29.jpg',
    },
    {
      id: 6,
      name: 'Coconut',
      img: 'https://media.istockphoto.com/photos/coconuts-with-leaves-on-white-picture-id1187687788?k=20&m=1187687788&s=612x612&w=0&h=zJhiAMVJhwcDt8hym_fNbSSbX0zFsC2puoyHmlyRpfY=',
    },
    {
      id: 7,
      name: 'Kiwifruit',
      img: 'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg',
    },
    {
      id: 8,
      name: 'Grape',
      img: 'https://img.freepik.com/premium-vector/isolated-dark-grape-with-green-leaf_317810-1956.jpg?w=2000',
    },
  ]);


  return (
    <>
      <Title/>
      <Body fruit={fruit} />
    </>
  )
}

export default Root