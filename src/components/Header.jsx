import React from "react";
import styled from "styled-components";
import { Text, Heading } from "@radix-ui/themes";

const Container = styled.div`
  margin: 1.5rem 0;
`;
function Header() {
  return (
    <Container>
    <Heading size='7' as="h1" color="iris">ChecklistPro</Heading>
    </Container>
  );
}

export default Header;
