const productos = [
    { nombre: "Royal Perro Maxi Adulto", precio: 600, id: "1", img:"https://eldestete.com.ar/wp-content/uploads/2021/06/MAXI_ADULT_01.jpg", idCat: "1" },
    { nombre: "Royal Perro Puppi", precio: 600, id: "2", img: "https://cdn.royalcanin-weshare-online.io/MT-XCH8BRYZmsWpcINJ8/v39/rc-spt-dry-minipuppy-mv-2-es-es", idCat: "1" },
    { nombre: "Performance Perro Adulto", precio: 400, id: "3", img: "https://puppis.vteximg.com.br/arquivos/ids/172829/168003-1.jpg?v=637350103647730000", idCat: "1" },
    { nombre: "Performance Perro Junior", precio: 400, id: "4", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/426/797/products/club-performance-perros-cachorro1-170b9e0fb00ec7601d16166043703138-640-0.png", idCat: "1" },
    { nombre: "Eukanuba Perro Adulto", precio: 500, id: "5", img: "https://mla-s1-p.mlstatic.com/872090-MLA31036626398_062019-F.jpg", idCat: "1" },
    { nombre: "Eukanuba Perro Cachorro", precio: 500, id: "6", img: "https://puppis.vteximg.com.br/arquivos/ids/173994/156339.jpg?v=637434938202200000", idCat: "1" },
    { nombre: "Royal Gato", precio: 600, id: "7", img: "https://kangoopet.com.ar/wp-content/uploads/2020/04/WEIGHT-CARE_01.jpg", idCat: "2" },
    { nombre: "Royal Gato Kitten ", precio: 600, id: "8", img: "https://tienda.mascoters.com.ar/wp-content/uploads/2023/01/royal-canin-kitten-400gr.png", idCat: "2" },
    { nombre: "Performance Gato Adulto", precio: 400, id: "9", img: "https://www.timberline.com.ar/831-large_default/royal-canin-performance-gato-adulto-x-7-kg.jpg", idCat: "2" },
    { nombre: "Performance Gato Kitten", precio: 400, id: "10", img: "https://faunatown.com.ar/wp-content/uploads/2021/07/club-performance-cat-kitten-gato-cachorro_115.png", idCat: "2" },
    { nombre: "Eukanuba Gato Adulto", precio: 500, id: "11", img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/S/aplus-media-library-service-media/743e6861-be44-4c16-9ef7-0392c79ca811.__CR0,0,488,700_PT0_SX488_V1___.jpg", idCat: "2" },
    { nombre: "Eukanuba Gato kitten", precio: 500, id: "12", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPZ2AV1Id60FHwjksQUqtZzPm4-bbkRH-Xoe-gXNZl4GRgF9wc1I2JGlMg7GbyP2g4bQ&usqp=CAU", idCat: "2" }
    // { nombre: "Pipeta Para Perros", precio: 200, id: "13", img: "https://traviesospetshop.com.ar/wp-content/uploads/2019/11/pipeta-power-5-a-10.png", idCat: "3" }
    // { nombre: "Pipeta Para Gatos", precio: 200, id: "14", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/830/783/products/power-pipeta-61-05b6b9c088ee67118f15521705964809-640-0.jpg", idCat: "3" }
    // { nombre: "Bebedero", precio: 350, id: "15", img: "https://d22fxaf9t8d39k.cloudfront.net/2743e5ebfe330606133a6148df6b09fe7ce755059a9ccdfe3c5d67edac829f9c1196.jpeg", idCat: "3" }
    // { nombre: "Jaula Transportadora", precio: 1500, id: "16", img: "https://http2.mlstatic.com/D_NQ_NP_636437-MLA44396416272_122020-O.jpg", idCat: "3" }
    // { nombre: "Correa", precio: 200, id: "17", img: "https://http2.mlstatic.com/D_NQ_NP_807388-MLA44559429310_012021-O.webp", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 2000)
    })
}
