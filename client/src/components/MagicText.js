// import * as React from "react";

// import { useDencrypt } from "use-dencrypt-effect";

// const values = ["useDencrypt", "Customizable", "React Hook", "Text Effect"];

// const Example = () => {
//   const { result, deEncrypt } = useDeEncrypt();

//   React.useEffect(() => {
//     let i = 0;

//     const action = setInterval(() => {
//       deEncrypt(values[i]);

//       i = i === values.length - 1 ? 0 : i + 1;
//     }, 2000);

//     return () => clearInterval(action);
//   }, []);

//   return <div>{result}</div>;
// };
// export default Example;