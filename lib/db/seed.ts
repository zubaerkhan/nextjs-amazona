import Product from './models/product.model'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import data from '../data'
import { connectToDatabase } from '.'
import User from './models/user.model'

loadEnvConfig(cwd())

const main = async () => {
  try {
    const { products, users } = data
    await connectToDatabase(process.env.MONGODB_URI)
    await User.deleteMany()
    const createdUser = await User.insertMany(users)

    await Product.deleteMany()
    const createdProducts = await Product.insertMany(products)

    console.log({
      createdUser,
      createdProducts,
      message: 'Seeded database successfully',
    })
    process.exit(0)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()
