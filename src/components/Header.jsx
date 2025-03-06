import React from "react";
import styled from "styled-components";
import { Heading, Badge } from "@radix-ui/themes";

const Container = styled.div`
  margin: 1.5rem 0;
  width: fit-content;
  position: relative;
`;
function Header() {
  return (
    <Container>
      <Heading size="7" as="h1" color="iris">
        ChecklistPro
      </Heading>
      <Badge
        variant="outline"
        color="iris"
        style={{ position: "absolute", top: "-5px", right: "-40px" }}
      >
        Beta
      </Badge>
    </Container>
  );
}

export default Header;
