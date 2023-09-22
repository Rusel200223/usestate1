import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Main = () => {
  const [main, setmain] = useState(false);
     const [flight, setflight] = useState(false);
  const [counter, setcounter] = useState(false);
     const [back, setBack] = useState(false);

  const tomain = () => {
      main ? setmain(false) : setmain(true);
    flight ? setflight(false) : setflight(false);
       counter ? setcounter(false) : setcounter(false);
    back ? setBack(false) : setBack(false);
  };
  const toflight = () => {
      flight ? setflight(false) : setflight(true);
    main ? setmain(false) : setmain(true);
       back ? setBack(false) : setBack(true);
  };
  const tocounter = () => {
      counter ? setcounter(false) : setcounter(true);
    main ? setmain(false) : setmain(true);
       back ? setBack(false) : setBack(true);
  };

  return (
    <View style={{ flexDirection: "column",
                   justifyContent: 'center',
                   alignItems: 'center'}}>
      <View style={{flexDirection: "row",
                    gap: 70,
                    justifyContent: "center",
                     paddingVertical: 20,}}>
        <Button title="F-LIGHT" disabled={main} onPress={toflight} />
        <Button title="COUNTER" disabled={main} onPress={tocounter} />
      </View>
      <View style={styles.body}>
        {flight && <Flight />}

        {counter && <Counter />}
      </View>
      <View style={{ width: 100,
           paddingVertical: 20}}>
        {back && <Button title="BACK" onPress={tomain} />}
      </View>
    </View>
  );
};

const Flight = () => {
  const [image, setimage] = useState(false);
  const [text, setText] = useState("ON");

  const toImage = () => {
    image ? setimage(false) : setimage(true);
    if (text === 'ON') {
      setText('OFF');
    } else {
      setText('ON');
    }
  };

  return (
    <View>
      {image &&  <Image style={{width: 250, height: 300}} source={{uri: 'https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/381204690_1350046029057300_3538980966210904559_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGoZarl4zOnfR9hezdcRutFkvgExYUoCxWS-ATFhSgLFRqDHFe_XlyCgSQ1K0gRdTOjLtfUb_3bYlcUuGp4CB2h&_nc_ohc=XNGmSA28xT4AX_vh9NG&_nc_oc=AQlhr3TAQGa0ACBiCO52KQGD-W95N8SBCtTx491QogfhTY2NrwpFyj2JgP1SCpML4pE&_nc_ht=scontent.fceb2-1.fna&oh=03_AdRKKwQKaakFYz1-eqlxHMlY-YG7PbdTbg1BMNkvYpZ9Zg&oe=6534B58B'}}  />
          }
        {!image &&  <Image style={{width: 250, height: 300}} source={{uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/381143186_1471130300349141_8237933679359652085_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHzLIPB0aAkO1XdDaECXg6F6NPKysr37vXo08rKyvfu9YR1dots3Z5UhKkyROzom44gi8I9aNtH7h_nFjRsKA0B&_nc_ohc=59xFmKuL5_AAX8Kwfrq&_nc_ht=scontent.fceb2-2.fna&oh=03_AdSVjD_HIMGZOaYKQoWZK2JD113bE6YVsGXnPuhRESMA_g&oe=6534B865'}}  />
          }
     <Button title= {text} color='green' onPress={toImage} />
    </View>
  );
};
const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={{ flex: 1,
                   flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center",
                   height: 400,}}>
      <Text style={{ fontSize: 100,}}>{number}</Text>
      <View style={{flexDirection: "row",
                              gap: 20,}}>
        <Button
          title="-1"
          color='green'
          onPress={() => {
            setNumber(number - 1);
          }}
        />
        <Button
          title="+1"
          color='green'
          onPress={() => {
            setNumber(number + 1);
          }}
        />
      </View>
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
  
});