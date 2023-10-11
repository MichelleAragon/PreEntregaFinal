import Box from "@mui/material/Box";
import imgPhone from "../assets/iphone-14-pro-max-colors.png";


const Home = () => {
  return (
    <Box sx={{ height: 100 }}>
      <h1>
        Encuentra las mejores opciones para trabajar desde la distancia, o
        disfrutar, lo que mas te guste!
      </h1>
      <div>
        <img src={imgPhone} />
      </div>
      <h1 className="last-text">
        No te quedes incomunicado, mantente siempre en linea con los Celulares
        que te ofrecemos, disfruta y conectate en todo momento!
      </h1>
    </Box>
  );
};

export default Home;
