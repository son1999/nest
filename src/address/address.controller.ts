import { Controller, Get } from '@nestjs/common';
import { AddressService } from './address.service';
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  getAllPosts() {
    return this.addressService.getAllAddressesWithUsers();
  }
}
