import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHelper } from 'src/app/helpers/errorHelper';
import { CreditCard } from 'src/app/models/creditCard';
import { Customer } from 'src/app/models/customer';
import { Rent } from 'src/app/models/rent';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentService } from 'src/app/services/rent.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cc-list',
  templateUrl: './cc-list.component.html',
  styleUrls: ['./cc-list.component.css'],
})
export class CcListComponent implements OnInit {
  cards: CreditCard[] = [];
  customer2:Customer

  constructor(
    private creditCardService: CreditCardService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router,
    private rentService : RentService,
    private localStorageService  :LocalStorageService,
    private customerService : CustomerService
  ) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['userId']) {
        this.getCardsByUserId(params['userId']);
      }
    });
    this.getCustomer()
  }

  getCardsByUserId(userId: number) {
    this.creditCardService.getByUserId(userId).subscribe((response) => {
      this.cards = response.data;
    });
  }

  getCustomer(){
    let getted = this.customerService.getCustomer(parseInt(this.localStorageService.getItem("CustomerId")!));
    getted.subscribe((response) => {
      this.customer2 = response.data;
    })
  }

  add() {
    if(this.customer2?.findexPoint >= parseInt(this.localStorageService.getItem("MFP")!))
    {
      this.rentService.add(this.rentService.getRentalInfo()).subscribe((response) => {
        this.toastrService.success(
          'Payment success. You are redirected to the main page.',
          response.message
        );
        this.customerService.addScore(this.customer2).subscribe((response2) => {
          this.toastrService.success("Congratulations! You have won 100 findex points.", response2.message);
          this.localStorageService.removeItem("MFP")
        }, responseError => {this.toastrService.info(ErrorHelper.getMessage(responseError), "Information")});
        this.rentService.clearRentalInfoCache()
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      }, (responseError) => {
        this.toastrService.error(ErrorHelper.getMessage(responseError), "Error")
        setTimeout(() => {
          this.localStorageService.removeItem("CustomerId")
          this.router.navigate(['']);
        }, 1000);
      });
    }else{
      this.toastrService.error("The customer's findex score is not enough.", "Error")
      setTimeout(() => {
        this.router.navigate(['']);
      }, 2000);
    }
    
  }

  deleteCard(card: CreditCard) {
    this.creditCardService.delete(card).subscribe(
      (response) => {
        this.toastrService.success(response.message, 'Card deleted.');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (responseError) => {
        this.toastrService.error(
          ErrorHelper.getMessage(responseError),
          'Error'
        );
      }
    );
  }
}
