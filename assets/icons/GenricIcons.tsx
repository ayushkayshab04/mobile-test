import { Circle, Path, Svg } from "react-native-svg";


export const More = (props:any) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <Circle cx={2.308} cy={2.95} r={2.308} fill="#fff" />
      <Circle cx={10} cy={2.95} r={2.308} fill="#fff" />
      <Circle cx={17.692} cy={2.95} r={2.308} fill="#fff" />
    </Svg>
  )

  export const Dollar = (props:any) => (
    <Svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none"
    {...props}
    >
      <Path
        fill="#2F2E41"
        fillRule="evenodd"
        d="M12.5 23.56c5.753 0 10.416-4.663 10.416-10.416S18.253 2.727 12.5 2.727 2.083 7.391 2.083 13.144 6.747 23.56 12.5 23.56Zm0-17.448c.431 0 .78.35.78.782v1.302h3.386a.781.781 0 1 1 0 1.562h-3.385v2.604h1.302a2.865 2.865 0 0 1 0 5.73h-1.302v1.302a.781.781 0 1 1-1.563 0v-1.302H8.333a.781.781 0 0 1 0-1.563h3.385v-2.604h-1.302a2.865 2.865 0 0 1 0-5.73h1.302V6.895c0-.432.35-.782.782-.782Zm-2.084 3.646h1.302v2.604h-1.302a1.302 1.302 0 0 1 0-2.604Zm2.865 6.771v-2.604h1.302a1.302 1.302 0 0 1 0 2.604h-1.302Z"
        clipRule="evenodd"
      />
    </Svg>
  )