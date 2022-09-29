import React, { useContext } from 'react'
import { MovieList } from '../../context'
import { data } from '../../data';
import {category} from '../../category'
import { Button, Container, InputWrap, Wrap,active } from './style'

export const Navbar = () => {
    const {setmovieData,type,setType} = useContext(MovieList);
    // const [name, setName] = useState('');
    
    const setChange = (e) => {
        const { value } = e.target;
        let result = data.filter((val) =>
            val.name.toLowerCase().includes(value?.toLowerCase())
         );
         setmovieData(result);
    }

    // const setKey = (e) => {
    //     if (e.key === 'Enter') {
    //       let result = data.filter((val) =>
    //         val.name.toLowerCase().includes(name.toLowerCase())
    //       );
    //       setmovieData(result);
    //     }
    // }

  return (
      <Container>
          <Wrap>
              <InputWrap>
                  <InputWrap.Input  onChange={setChange} type={'text'} placeholder={'Search...'} />
                  <InputWrap.Icon/>
              </InputWrap>
          </Wrap>
          <Wrap>
              {
                  category.map((value) => {
                      return <Button
                          style={type === value.title ? active : {}}
                          onClick={() =>
                          setType(value.title)}
                          key={value.id}>{value.title}
                      </Button>
                  })
              }
          </Wrap>
      </Container>
  )
}

export default Navbar
