type size = "S"| "M" |"L"| "XL";
type sizeStock = {size:size, stock: number};

export interface Product {
    id: number,
    name: string,
    descriptionName: string,
    stockBySize:sizeStock[],
    priceInDollars:number,
    imageSrc: string
    imageAltText: string
}
