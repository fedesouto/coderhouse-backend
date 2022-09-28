import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto)
    return createdProduct.save()
  }

  async findAll(): Promise<Product[]>  {
    return this.productModel.find().exec()
  }

  findOne(id: string) {
    return this.productModel.findOne({id: id}).exec();
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findOneAndUpdate({id: id}, updateProductDto);
  }

  remove(id: string) {
    return this.productModel.findOneAndDelete({id: id});
  }
}
