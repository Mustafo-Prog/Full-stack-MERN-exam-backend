const {z} = require("zod");

const schema = z.object({
    name: z.string(),
    volume: z.number().optional(),
    price: z.number().min(0),
    category: z.string(),
    available: z.boolean()
})

module.exports = schema;