import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heros: Array<any> = [
    {
      id: 1,
      name: 'batman',
      gender: 1,
      img: 'https://fakeimg.pl/70/',
    },
    {
      id: 2,
      name: 'wonder women',
      gender: 2,
      img: 'https://fakeimg.pl/70/',
    },
    {
      id: 3,
      name: 'Loki',
      gender: 1,
      img: 'https://fakeimg.pl/70/',
    },
  ];
  addHero = {
    id: null as any,
    name: null,
    gender: 1,
    img: null,
  };
  showname(hero: any): void {
    alert(hero.name);
  }
  // Hàm xóa 1 hero
  removeHero(hero: any): void {
    // console.log(hero);
    // Thực hiện loại phần tử vừa được gửi lên khỏi mảng heros
    this.heros = this.heros.filter((value) => {
      return value.id != hero.id;
    });
  }
  addHeroName(event: any) {
    // console.log(event)
    this.addHero.name = event.target.value;
  }
  addHeroimg(event: any) {
    this.addHero.img = event.target.value;
  }
  addHeroGender(event: any) {
    this.addHero.gender = event.target.value;
  }

  addNewHero() {
    // Nếu id!=0 thì sẽ là cập nhật nếu = 0 thì thêm mới

    // Tìm ra id lớn nhất => id mới = id lớn nhất + 1
    let maxId = 1;
    this.heros.forEach((val, ind) => {
      if (val.id >= maxId) {
        maxId = val.id;
      }
    });
    this.addHero.id = ++maxId;
    // Chuyển gender sang số
    this.addHero.gender = Number(this.addHero.gender);
    // Add thêm 1 phần tử nữa vào trong mảng heros
    this.heros.push(this.addHero);
    this.addHero = {
      id: null as any,
      name: null,
      gender: 1,
      img: null,
    };
  }

  showRemoveData(removeHero: any) {
    console.log(removeHero);
  }
  constructor() {}
  ngOnInit(): void {}
}
