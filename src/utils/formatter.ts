export const dateFromatter = new Intl.DateTimeFormat('pt-BR')

export const priceFromatter = new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency: "BRL"
})