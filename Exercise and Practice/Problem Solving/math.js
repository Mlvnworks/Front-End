let pieces = 20;
let discount = 0.05;
const totalPrice = 3500;
let profit = 0;

function getDiscount() {
    let pricePerPiece = totalPrice / pieces;
    const discounted = pricePerPiece * discount;

    function getProfit() {
        const salePieces1 = 10;
        const totalPrice1 = 1800;
        const pricePerPieceSale1 = totalPrice1 / salePieces1;

        const salePieces2 = 10;
        const pricePerPieceSale2 = 185;
        const totalPrice2 = salePieces2 * pricePerPieceSale2;

        const totalCapital = totalPrice;
        const totalDiscount = discounted;
        const totalProfit = totalPrice1 + totalPrice2 + totalDiscount;

        console.log(
            `he buy ${pieces} of strawberry jam for ${totalPrice} with 1 ${discount} discount and he sold ${salePieces1} for ${pricePerPieceSale1} each and earned ${totalPrice1}. While the other ${salePieces2} was sold for ${pricePerPieceSale2} each, and he earned ${totalPrice2}. The total profit he got was ${
                totalProfit - totalCapital
            }.`
        );
        return totalProfit - totalCapital;
    }

    return getProfit();
}

console.log(getDiscount());
