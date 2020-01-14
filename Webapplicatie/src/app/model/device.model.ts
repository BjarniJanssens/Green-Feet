export class Device{
  name: string;
  kwh: number;
  consumptionPrice: number;
  percentage: number;

  constructor(name: string, kwh: number) {
      this.name = name;
      this.kwh = kwh;
      this.consumptionPrice = this.calculateConsumptionPrice();
      this.percentage = this.calculatePercentage();
  }

  calculateConsumptionPrice() {
   return Math.round(this.kwh * 0.23 * 100) / 100;
  }

  calculatePercentage() {
      return 100 - (this.kwh / 0.30 * 100);
  }

}
