// import { generateSecureRandom } from "react-native-securerandom";

// generateSecureRandom(12).then(randomBytes => console.log(randomBytes));
// generateId = () =>
//   generateSecureRandom(8).then(bytes =>
//     bytes.reduce((prev, curr) => {
//       return (prev << 4) + curr;
//     }, 0)
//   );

getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

generateId = () => getRndInteger(0, 2147483647);

export { generateId };
