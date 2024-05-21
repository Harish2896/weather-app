export const setBackgroundImage = (code, text, setBgImageURL) => {
  const url = () => {
    switch (true) {
      case text === "Clear":
        return "/clearSky.jpg";

      case code === 1003 || code === 1006 || code === 1009:
        return "/partlyCloudy.jpg";

      case code === 1030 || code === 1135 || code === 1147:
        return "/misty.jpg";

      case code === 1087 ||
        code === 1273 ||
        code === 1276 ||
        code === 1279 ||
        code === 1282:
        return "/thunder.jpg";

      case code === 1069 ||
        code === 1072 ||
        code === 1147 ||
        code === 1168 ||
        code === 1171 ||
        code === 1198 ||
        code === 1201 ||
        code === 1204 ||
        code === 1237 ||
        code === 1249 ||
        code === 1252 ||
        code === 1261 ||
        code === 1264 ||
        code === 1207:
        return "/sleet.jpg";

      case code === 1066 ||
        code === 1114 ||
        code === 1117 ||
        code === 1210 ||
        code === 1213 ||
        code === 1216 ||
        code === 1219 ||
        code === 1222 ||
        code === 1225 ||
        code === 1255 ||
        code === 1258:
        return "/snow.jpg";

      case code === 1063 ||
        code === 1150 ||
        code === 1153 ||
        code === 1180 ||
        code === 1183 ||
        code === 1186 ||
        code === 1189 ||
        code === 1192 ||
        code === 1240 ||
        code === 1243 ||
        code === 1246 ||
        code === 1195:
        return "/rain.jpg";

      default:
        return "/sunny.jpg";
    }
  };
  // console.log(url());
  // console.log(code);
  return setBgImageURL(url());
};
