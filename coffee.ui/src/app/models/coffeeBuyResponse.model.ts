export class coffeeBuyResponse {
      uuid: string;
      result: boolean;
      message: string;
      constructor(id: string, result: boolean, message: string) {
            this.uuid = id;
            this.result =  result;
            this.message = message;
      }
}