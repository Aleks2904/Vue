export const basketOfGoods = {
    state: () => ({
        goodsArr: [],
    }),
    mutations: {
        setGoodsArr(state, arr) {
            if (!state.goodsArr.some(el => el.id === arr.id)) {
                state.goodsArr.push(arr);
            } else {
                state.goodsArr.map(item => {
                    if (item.id === arr.id) {
                        item.number = arr.number
                    }
                })
            }
        }
    },
    namespaced: true,
}