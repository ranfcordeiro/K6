import Test from "./cenarios/test.js";
import {group , sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

//Html Report
export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }

export default () => {

    group('teste', () => {
      Test();
    });

    sleep(1);
}
