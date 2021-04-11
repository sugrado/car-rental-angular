# CarRentalNg  

Scroll down for images. (Fotoğraflar için aşağı kaydırın.)  

Apr 11, 2021  (Nis 11, 2021)  
  
- Added edit MFP(min. findex point) in car update page.(Araç güncelleme sayfasına MFP düzenleme seçeneği eklendi.)  
- Design improved.(Tasarım iyileştirildi.)  
- Switched from list view to card view in home page.(Liste görünümünden kart görünümüne geçildi. Kullanıcı isteğine göre görünüm değiştirebilme özelliği eklenecek.)  
- Brand and color id information added to the vehicle update page.(Araç güncelleme sayfasına bilgi amaçlı marka ve renk kimlik numaraları eklendi.)  

Mar 29, 2021  
  
- Dark theme in action.(Karanlık Temaya geçildi.)  
- Login / Register properties added.(Giriş yapma ve kayıt olma özellikleri getirildi.)  
- Findex-score system added.(Findex skor sistemi eklendi.)  
- Customers whose findex score is less than the MFP of the vehicle cannot rent a car.(Findex skoru kiralamak istenilen aracın MFP'sinden düşük ise müşteri araç kiralayamaz.)  
- Customers who reach the 1900 findex record become VIP customers.(1900 findex skoruna ulaşan kullanıcılar VIP müşteri sınıfına girer.)  
- The names of the logged-in users are written on the navbar, for non-logged in users there will be login / register buttons on the navbar.(Navbar'da giriş yapılmışsa giriş yapan kişinin adı ve profil seçenekleri çıkar. Giriş yapılmamışsa giriş yap / kayıt ol seçenekleri gözükür.)  
- Login is required to rent a car.(Araç kiralamak için sisteme giriş yapılmalıdır.)  
- Users can view and update their information.(Kullanıcılar bilgilerini görüp güncelleyebilir, hesaplarını silebilirler.) (First Name, Last Name, E-mail, Password, Credit-Cards, Delete Account)  
- Users have the option to save their credit card for subsequent purchases.(Ödeme esnasında müşteri isterse kredi kartını bir sonraki ödemede kullanabilmek için kaydedebilir.)  
- It is not allowed to rent a car within the date range rented by someone else.(Araç seçilen tarihler arasında başka birisi tarafından kiralanmışsa kiralanamaz.)  
- Successful paying users earn 100 findex points.(Başarılı ödeme gerçekleştirip araç kiralayan müşteriler 100 findex skoru kazanır.)  
- Rental is not possible without payment.(Ödeme alınmadan kiralama işlemi gerçekleşmez. Veritabanına kaydolması için ödemenin yapılması gerekir.)  

# Main Page (Ana sayfa)  
![](ImagesForReadme/main_page.png "main_page")

# Hover Card (Mouse ile bir aracın üstüne gelince)  
![](ImagesForReadme/hover_card.png "hover_card")

# Multiple Filter Car (Aynı anda renk ve marka filtrelemesi)  
![](ImagesForReadme/multiple_filter.png "multiple_filter")

# Not Login Car Detail (Giriş yapılmadan araç detay sayfası)  
![](ImagesForReadme/not_login_car_detail.png "not_login_car_detail")

# Login Car Detail (Giriş yapıldıktan sonra araç detay sayfası)  
![](ImagesForReadme/login_car_detail.png "login_car_detail")

# Rental Create Page (Kira oluşturma sayfası)  
![](ImagesForReadme/rental_create_page.png "rental_create_page")

# Payment Page (Ödeme Sayfası)  
![](ImagesForReadme/payment_page.png "payment_page")

# Card Save Question (Kart kaydedilsin mi uyarısı)  
![](ImagesForReadme/card_save_question_attention.png "card_save_question_attention")

# Not Enough Findex Score (Findex skoru aracı kiralamak için yeterli değil)  
![](ImagesForReadme/not_enough_findex_score.png "not_enough_findex_score")

# Payment Success (Başarılı ödeme)  
![](ImagesForReadme/payment_success.png "payment_success")

# VIP Customer (VIP müşteri bilgilendirmesi)  
![](ImagesForReadme/VIP_customer_1900_findex_score.png "VIP_customer_1900_findex_score")

# Profile Managament Page (Kullanıcı bilgilerini güncelleme sayfası)  
![](ImagesForReadme/profile_management_user_info.png "profile_management_user_info")

# Manage Credit Cards (Kayıtlı kredi kartlarını yönetme sayfası)  
![](ImagesForReadme/profile_management_cards.png "profile_management_cards")

# Delete Account (Hesap silme seçeneği)  
![](ImagesForReadme/profile_management_delete_account.png "profile_management_delete_account")

# Change Password Wrong Old Password (Parola değiştirirken hatalı eski şifre)  
![](ImagesForReadme/change_password_wrong_old%20password.png "change_password_wrong_old password")

# Change Password True Old Password (Başarılı parola değiştirme)  
![](ImagesForReadme/change_password_true_old%20password.png "change_password_true_old password")

# Add Car Page (Araç ekleme sayfası)  
![](ImagesForReadme/add_car.png "add_car")

# Update Car Page (Araç güncelleme sayfası)  
![](ImagesForReadme/update_car.png "update_car")

# Try Delete Using Car (Şuan kullanılan aracı silmeye çalışmak)  
![](ImagesForReadme/try_delete_using_car.png "try_delete_using_car")

# Add Brand Page (Marka ekleme sayfası)  
![](ImagesForReadme/add_brand.png "add_brand")

# Update Brand Page (Marka güncelleme sayfası)  
![](ImagesForReadme/update_brand.png "update_brand")

# Delete Brand Page (Marka silme sayfası)  
![](ImagesForReadme/delete_brand.png "delete_brand")

# Color Management Page. Similar with brand (Renk yönetim sayfası. Marka ile aynı özellikler.)  
![](ImagesForReadme/color_management.png "color_management")

# Login Navbar (Giriş yapınca üst çubuk)  
![](ImagesForReadme/login_navbar.png "login_navbar")

# Not Login Navbar (Giriş yapmayınca üst çubuk)  
![](ImagesForReadme/not_login_navbar.png "not_login_navbar")

# User Options (Kullanıcı için sunulan seçenekler)  
![](ImagesForReadme/navbar_menu.png "navbar_menu")

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. 
