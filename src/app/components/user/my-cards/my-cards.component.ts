import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHelper } from 'src/app/helpers/errorHelper';
import { CreditCard } from 'src/app/models/creditCard';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css'],
})
export class MyCardsComponent implements OnInit {
  cards: CreditCard[] = [];
  constructor(
    private creditCardService: CreditCardService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['userId']) {
        this.getCardsByUserId(params['userId']);
      }
    });
  }

  getCardsByUserId(userId: number) {
    this.creditCardService.getByUserId(userId).subscribe((response) => {
      this.cards = response.data;
    });
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
