import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  newEn = "";
  newVn = "";
  isShowForm = false;
  filterStatus = 'XEM_TAT_CA';
  constructor() { }

  ngOnInit() {
  }

  addWord(){
    // thêm vào đầu mảng
    // this.isShowForm = true;
    this.arrWords.unshift({ 
      id: this.arrWords.length + 1 ,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    // thêm vào cuối mảng
    // this.arrWords.push() 

    // sau khi thêm xong thì xoa trang input
    this.newEn = "";
    this.newVn = "";
    // sau khi tem xong thi cung an form 
    this.isShowForm = false;
  }

  delWord(id){
    //lấy ra index của id đó trong mảng
    const index = this.arrWords.findIndex(word => word.id === id);
    //or dung cach nay de lay id
    // const index = this.arrWords.indexOf(id);
    // xóa
    this.arrWords.splice(index,1);
  }

  getShowStatus(memorized: boolean) {
    const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
    const dkXemDaNho = this.filterStatus === 'XEM_DA_NHO' && memorized;
    const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;
    return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
  }

}
