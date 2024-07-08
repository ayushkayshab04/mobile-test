import { Circle, Path, Svg } from "react-native-svg";


export const More = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle cx={2.308} cy={2.95} r={2.308} fill="#fff" />
    <Circle cx={10} cy={2.95} r={2.308} fill="#fff" />
    <Circle cx={17.692} cy={2.95} r={2.308} fill="#fff" />
  </Svg>
)

export const Dollar = (props: any) => (
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

export const Location = (props:any)=> {
  return (
    <Svg
      width={22}
      height={26}
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.341 8.813C20.061 3.18 15.146.643 10.83.643h-.012C6.512.643 1.585 3.167.305 8.8c-1.427 6.293 2.427 11.622 5.914 14.976a6.629 6.629 0 004.61 1.866 6.579 6.579 0 004.598-1.866c3.488-3.354 7.341-8.671 5.915-14.964zm-10.512 6.11a3.841 3.841 0 110-7.682 3.841 3.841 0 010 7.682z"
        fill="#2F2E41"
      />
    </Svg>
  )
}

export const Ticket =(props:any)=> {
  return (
    <Svg
      width={23}
      height={17}
      viewBox="0 0 23 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.803 5.907a3.36 3.36 0 00-2.39-1.002v-2.28c0-.606.237-1.186.66-1.614A2.24 2.24 0 012.665.343h18.03c.598 0 1.171.24 1.594.668.423.428.66 1.008.66 1.613v2.281a3.36 3.36 0 00-2.39 1.002 3.442 3.442 0 00-.99 2.42c0 .907.356 1.777.99 2.418a3.36 3.36 0 002.39 1.003v2.28c0 .605-.237 1.185-.66 1.613a2.24 2.24 0 01-1.593.668H2.666a2.24 2.24 0 01-1.594-.668 2.295 2.295 0 01-.66-1.613v-2.28a3.36 3.36 0 002.39-1.002c.635-.642.99-1.512.99-2.42 0-.907-.355-1.777-.99-2.419zm10.576-4.753v-.57h-1.142v2.029a.57.57 0 101.142 0V1.154zm-.57 12.305a.57.57 0 01.57.572l-.003 1.458-.001.571-1.142-.002.002-.57.002-1.46a.57.57 0 01.572-.57zm.57-6.273a.57.57 0 00-1.142 0v2.282a.57.57 0 101.142 0V7.186z"
        fill="#2F2E41"
      />
    </Svg>
  )
}

export const Calender = (props) => (
  <Svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M15.625 4.80929V2.72595V4.80929ZM15.625 4.80929V6.89262V4.80929ZM15.625 4.80929H10.9375H15.625ZM3.125 11.0593V20.4343C3.125 21.5849 4.05774 22.5176 5.20833 22.5176H19.7917C20.9423 22.5176 21.875 21.5849 21.875 20.4343V11.0593H3.125Z" fill="#2F2E41" />
    <Path d="M15.625 4.80929V2.72595M15.625 4.80929V6.89262M15.625 4.80929H10.9375M3.125 11.0593V20.4343C3.125 21.5849 4.05774 22.5176 5.20833 22.5176H19.7917C20.9423 22.5176 21.875 21.5849 21.875 20.4343V11.0593H3.125Z" stroke="#2F2E41" stroke-width="1.8125" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M3.125 11.0592V6.89254C3.125 5.74194 4.05774 4.8092 5.20833 4.8092H7.29167" stroke="#2F2E41" stroke-width="1.8125" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M7.29163 2.72595V6.89262" stroke="#2F2E41" stroke-width="1.8125" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M21.875 11.0592V6.89254C21.875 5.74194 20.9423 4.8092 19.7917 4.8092H19.2709" stroke="#2F2E41" stroke-width="1.8125" stroke-linecap="round" stroke-linejoin="round" />
  </Svg>

)


export const CheckCircle = (props:any)=> {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={9.5} cy={9} r={9} fill={"#8982FF"} />
      <Path
        d="M5.5 8.83l2.83 2.83L14 6"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}