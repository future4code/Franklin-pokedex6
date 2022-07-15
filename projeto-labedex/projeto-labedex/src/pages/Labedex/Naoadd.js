import React from "react";
import { Teste, Title, CardTest } from "./styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Naoadd() {
  return (
    <div>
      <CardTest>
        <Typography gutterBottom
              variant="h5"
              component="div"
              color={"primary"}>
          <CardMedia
            component="img"
            height="140"
            width="200"
            margin="20"
            image="https://2.bp.blogspot.com/-Nequr-i_Cqc/V4UOPMp9cmI/AAAAAAAAVsY/4kAhwWMDMp8PK_TZRStpO1ncXTqS9cv5QCLcB/s1600/Pokemon%2BGo%2BAplicativo%2BJogo%2BRealidade%2BVirtual%2BCansado%2Bde%2BEsperar.gif"
            alt="img"
          />
        </Typography>
      </CardTest>

      <Title>Você não adicionou nenhum pokemon</Title>
    </div>
  );
}

export default Naoadd;
