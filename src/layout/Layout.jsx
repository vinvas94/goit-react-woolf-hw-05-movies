import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, List, Item, Links, Main } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <List>
          <Item>
            <Links to="/">Home</Links>
          </Item>
          <Item>
            <Links to="/movies">Movies</Links>
          </Item>
        </List>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
