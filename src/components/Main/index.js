import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Container } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#cf8d6d",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#cf8d6d",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#cf8d6d",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#cf8d6d",
      },
    },
  },
})(TextField);

const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [locality, setLocality] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendEmail = () => {
    sendEmail();
    setOpen(false);
  };

  const sendEmail = () => {
    fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        whatsapp,
        locality,
        message,
      }),
    })
      .then(() => {
        setName(""),
          setEmail(""),
          setWhatsapp(""),
          setLocality(""),
          setMessage("");
      })
      .catch(console.error);
  };

  return (
    <Container>
      <div className="frase">
        <p>
          "Conheça todas as teorias, domine todas as práticas, mas ao tocar uma
          alma humana, seja apenas outra alma humana"
        </p>
        <h1>C. Jung</h1>
      </div>
      <div className="services">
        <div className="div-exterior">
          <div className="exterior">
            <img className="icon-exterior" src="icones-01.svg" />
            <h1>Brasileiros no exterior</h1>
            <p>
              Os relacionamentos são cercados de desafios ao longo de sua
              história, duas pessoas com suas bagagens emocionais, em busca de
              um caminho para seguir em conjunto. Porém, apesar dos laços
              afetivos que envolvem o casal, nem sempre isto basta para que
              consigam manter um relacionamento saudável. Por isso, a terapia de
              casal tem um papel importante nesta área, auxiliando o casal ao
              autoconhecimento, buscando alinharem seus caminhos.
            </p>
          </div>
        </div>
        <div className="div-individual">
          <div className="individual">
            <img className="icon-individual" src="icones-02.svg" />
            <h1>Psicoterapia individual</h1>
            <p>
              Os relacionamentos são cercados de desafios ao longo de sua
              história, duas pessoas com suas bagagens emocionais, em busca de
              um caminho para seguir em conjunto. Porém, apesar dos laços
              afetivos que envolvem o casal, nem sempre isto basta para que
              consigam manter um relacionamento saudável. Por isso, a terapia de
              casal tem um papel importante nesta área, auxiliando o casal ao
              autoconhecimento, buscando alinharem seus caminhos.
            </p>
          </div>
        </div>
        <div className="div-casal">
          <div className="casal">
            <img className="icon-casal" src="icones-03.svg" />
            <h1>Brasileiros no exterior</h1>
            <p>
              Os relacionamentos são cercados de desafios ao longo de sua
              história, duas pessoas com suas bagagens emocionais, em busca de
              um caminho para seguir em conjunto. Porém, apesar dos laços
              afetivos que envolvem o casal, nem sempre isto basta para que
              consigam manter um relacionamento saudável. Por isso, a terapia de
              casal tem um papel importante nesta área, auxiliando o casal ao
              autoconhecimento, buscando alinharem seus caminhos.
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="detail-gray-1"></div>
      </div>
      <div className="section-sobre" id="sobre">
        <div className="title-sobre">
          <h1>Sobre mim</h1>
          <img className="linha" src="linha-grossa.png" />
          <p>
            Estefane Monique Medeiros da Silva - CRP n°07/30749
            <br />
            Psicóloga Clínica, formada pelo Centro Universitário Unicnec,
            utilizo como ênfase nos atendimentos a abordagem
            Cognitiva-Comportamental (TCC), incluindo também a Terapia do
            Esquema. Pós-graduada em Psicologia Jurídica e Avaliação
            Psicológica, busco proporcionar aos pacientes um acolhimento livre
            de preconceitos, utilizando técnicas e teorias comprovadas
            cientificamente.
          </p>
        </div>
      </div>
      <div className="serie" id="exterior">
        <h1>Conheça o e-book:</h1>
        <p>Brasileiros no exterior</p>
        <button variant="outlined" color="primary" onClick={handleClickOpen} style={{outline: 'none', cursor: 'pointer'}}>
          Conhecer
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div className="detail-gray-1"></div>
      </div>
      <div
        style={{
          display: "none",
          justifyContent: "center",
          padding: "20rem 10rem 20rem 10rem",
        }}
      >
        <h1>INSTAGRAM</h1>
      </div>
      <div className="contact">
        <div className="title-contact">
          <h1>
            Vamos
            <br />
            conversar?
          </h1>
          <img className="linha" src="linha-grossa.png" />
        </div>
        <div className="form">
          <CssTextField
            required
            id="standard-required"
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CssTextField
            required
            id="standard-required"
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "1rem 0 0 0 " }}
          />
          <CssTextField
            required
            id="standard-required"
            label="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            style={{ margin: "1rem 0 0 0 " }}
          />
          <CssTextField
            required
            id="standard-required"
            label="Localidade"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            style={{ margin: "1rem 0 0 0 " }}
          />
          <CssTextField
            id="outlined-multiline-static"
            label="Como posso ajudar?"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
            style={{ margin: "1rem 0 0 0 " }}
          />
          <button type="submit" onClick={sendEmail} style={{outline: 'none', cursor: 'pointer'}}>
            Enviar
          </button>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">E-book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Basta preencher seu email para ter acesso ao e-book feito com todo carinho para você que vive no exterior
          </DialogContentText>
          <CssTextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancelar
          </Button>
          <Button onClick={handleSendEmail} color="default">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Main;
