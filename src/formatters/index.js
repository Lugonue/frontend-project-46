import { jsonFormater } from "./jsonFormater.js";
import { plain } from "./plain.js";
import { stylish } from "./stylish.js";

const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish': return stylish(data);
    case 'plain': return plain(data);
    case 'json': return jsonFormater(data);
    default: return "Error, incorrect format name";
  }
};

export { format };
