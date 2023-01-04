import Header from "../header/Header";
import List from "../list/List";
import Form from "../form/Form";
import styled from "styled-components";

function Layout() {
  return (
    <StLayout>
      <Header />
      <Form />
      <List />
    </StLayout>
  );
}

export default Layout;

const StLayout = styled.div`
  /* 레이아웃의 최대, 최소 너비 지정 */
  max-width: 1200px;
  min-width: 800px;

  /* 레이아웃 가운데 정렬 */
  margin: 0 auto;
`;
