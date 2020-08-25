import * as React from 'react';

import { AiOutlineSearch, AiFillDribbbleCircle } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import {
  Container, Input, ContainerListItens,
  ListItens, Item, TitleItem, ItemDesc,
  DivDesc,
} from './styles';
import api from '../../services/api';

export default function Home() {
  const [itens, setItens] = React.useState([]);
  const [textFilter, setTextFilter] = React.useState('');

  const filter = () => {
    const textTemp = textFilter.toUpperCase();
    const itensFiltered = itens.filter((i) => i.nmUnimed.includes(textTemp));
    setItens(itensFiltered);
  };

  React.useEffect(() => {
    const getItens = () => {
      api.get().then((response) => {
        setItens(response.data);
      });
    };
    getItens();
  }, []);

  return (
    <Container>
      <Input>
        <AiOutlineSearch onClick={filter} size={25} />
        <input placeholder="Pesquisar" value={textFilter} onChange={(t) => setTextFilter(t.target.value)} />
      </Input>

      <ContainerListItens>
        <ListItens>

          {
            itens.map((i) => (
              <Item key={i.cdUnimed}>
                <TitleItem>{i.nmUnimed}</TitleItem>
                <div>
                  <DivDesc>
                    <AiFillDribbbleCircle color="#838080" size={22} />
                    <ItemDesc>{i.site ? i.site : 'Nenhum site cadastrado'}</ItemDesc>
                  </DivDesc>
                  |
                  <DivDesc>
                    <MdCall color="#838080" size={22} />
                    <ItemDesc>{i.telefone}</ItemDesc>
                  </DivDesc>
                  |
                  <DivDesc>
                    <GoLocation color="#838080" size={22} />
                    <ItemDesc>{i.endereco}</ItemDesc>
                  </DivDesc>
                </div>
              </Item>
            ))
          }

        </ListItens>
      </ContainerListItens>

    </Container>
  );
}
