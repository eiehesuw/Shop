const sizes = [
    { id: 1, label: 'XS', number: 44 },
    { id: 2, label: 'S', number: 46 },
    { id: 3, label: 'M', number: 48 },
    { id: 4, label: 'L', number: 50 },
    { id: 5, label: 'XL', number: 52 },
]

const products = [
    {
        id: 1,
        name: 'Футболка',
        colors: [
            {
                id: 1,
                name: 'черный',
                color: '#000000',
                images: ['/images/1/black_front.webp', '/images/1/black_back.webp'],
                price: '123.00',
                description: 'Описание для "Футболка черный"',
                sizes: [1, 2, 3],
            },
            {
                id: 2,
                name: 'белый',
                color: '#FFFFFF',
                images: ['/images/1/white_front.webp', '/images/1/white_back.webp'],
                price: '125.00',
                description: 'Описание для "Футболка белый"',
                sizes: [1, 2, 3, 4, 5],
            },
            {
                id: 3,
                name: 'хаки',
                color: '#78866B', // army green / khaki
                images: ['/images/1/haki_front.webp', '/images/1/haki_back.webp'],
                price: '120.00',
                description: 'Описание для "Футболка хаки"',
                sizes: [],
            },
        ],
    },

    {
        id: 2,
        name: 'Футолка',
        colors: [
            {
                id: 1,
                name: 'синий',
                color: '#0000FF',
                images: ['/images/2/blue_front.webp', '/images/2/blue_back.webp'],
                price: '88.00',
                description: 'Описание для "Футолка синий"',
                sizes: [1, 2, 3, 4, 5],
            },
            {
                id: 2,
                name: 'белый',
                color: '#FFFFFF',
                images: ['/images/2/white_front.webp', '/images/2/white_back.webp'],
                price: '89.00',
                description: 'Описание для "Футолка белый"',
                sizes: [2],
            },
        ],
    },

    {
        id: 3,
        name: 'Шорты',
        colors: [
            {
                id: 1,
                name: 'чёрный',
                color: '#000000',
                images: ['/images/3/black_front.webp', '/images/3/black_back.webp'],
                price: '110.00',
                description: 'Описание для "Шорты чёрный"',
                sizes: [1, 2, 3, 4, 5],
            },
            {
                id: 3,
                name: 'бежевый',
                color: '#F5F5DC',
                images: ['/images/3/beige_front.webp', '/images/3/beige_back.webp'],
                price: '100.00',
                description: 'Описание для "Шорты бежевый"',
                sizes: [4, 5],
            },
        ],
    },
]


function getSizes() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(sizes), 250)
    })
}

function getSize(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const size = sizes.find((size) => size.id == id)
            if (size) {
                resolve(size)
            } else {
                reject(new Error('getSize: Size not found'))
            }
        }, 250)
    })
}

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 250)
    })
}

function getProduct(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((product) => product.id == id)
            if (product) {
                resolve(product)
            } else {
                reject(new Error('getProduct: Product not found'))
            }
        }, 250)
    })
}

function getProductColor(productID, colorID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((product) => product.id == productID)

            if (!product) {
                return reject(new Error('getProductColor: Product not found'))
            }

            const color = product.colors.find((color) => color.id == colorID)

            if (color) {
                resolve(color)
            } else {
                reject(new Error('getProductColor: Color not found'))
            }
        }, 250)
    })
}

export { getSizes, getSize, getProducts, getProduct, getProductColor }