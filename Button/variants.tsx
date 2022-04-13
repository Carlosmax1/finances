export interface ButtonStyle{
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
  icon:{
    color: string;
  };
}

export interface ButtonVariant{
  enable: ButtonStyle;
  disable: ButtonStyle;
}

export const buttonPrimay: ButtonVariant ={
  enable:{
    button:{backgroundColor: "#36CD90"},
    title:{color: "#fff"},
    icon:{color: "#fff"}
  },
  disable: {
    button:{backgroundColor: "#D9D9D9"},
    title: {color: "#999999"},
    icon: {color: "#999999"}
  }
}

export const buttonOutline: ButtonVariant ={
  enable:{
    button:{backgroundColor: "transparent", borderWidth: 2, borderColor: "#36CD90"},
    title:{color: "#36CD90"},
    icon:{color: "#36CD90"}
  },
  disable: {
    button:{backgroundColor: "transparent", borderWidth: 2, borderColor: "#d9d9d9"},
    title: {color: "#999999"},
    icon: {color: "#999999"}
  }
}

const primary: ButtonStyle = {
  button:{
    backgroundColor: "#36CD90"
  },
  title:{
    color: "#fff"
  },
  icon:{
    color: "#fff"
  }
};

export const variants = {
  primary: buttonPrimay,
  outline: buttonOutline
}