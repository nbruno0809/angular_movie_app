import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class FormatService {

    budgetToString(budget: number) : string {
    let s: string = budget.toString();
    let out = " $";
    let j=0;
    for(let i=s.length-1; i>=0; i--) {
      out = s[i] + out;
      j++;
      if (j===3 && i!==0) {
        out = "." + out;
        j=0
      }
    }
    return out;
  }

  ratingColorValues(rate: number) : {r: number, g: number, b:number} {
    let rgb = {r: 0, g: 0, b:150}
    rgb.r= (10-rate) >=5 ? 255 : (10-rate) * 255 / 5
    rgb.g= rate >= 5 ? 255 : rate * 255 / 5
    console.log(rgb)
    return rgb
  }

  ratingRGBA(rate : number) : string {
    if (rate >= 8) 
        return "rgba(87,227,44,255)";
    else if ( rate >= 6)
        return "rgba(183,221,40,255)"
    else if (rate >= 4)
        return "rgba(255,226,52,255)"
    else if (rate >= 2)
        return "rgba(255,165,51,255)"
    else
        return "rgba(255,69,70,255)"

  }

  ratingRGB(rate: number) : string {
    let rgb = this.ratingColorValues(rate);
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  }
}