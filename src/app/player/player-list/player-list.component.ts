import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { QBStat } from '../qbstat';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-player',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  selectedPlayer: Player | any;
  player!: Player | {};
  qbstat!: QBStat | {};

  players = [
    {
      id: '0',
      name: 'Anthony Richardson',
      position: 'QB',
      plink: 'https://www.pro-football-reference.com/players/R/RichAn03.htm',
    },
    {
      id: '1',
      name: 'Michael Pittman',
      position: 'WR',
      plink: 'https://www.pro-football-reference.com/players/P/PittMi01.htm',
    },
    {
      id: '2',
      name: 'Grant Stuard',
      position: 'LB',
      plink: 'https://www.pro-football-reference.com/players/S/StuaGr00.htm',
    },
  ];
  tops = [
    {
      id: '0',
      name: 'Alec Pierce',
      position: 'WR',
      plink: 'https://www.pro-football-reference.com/players/P/PierAl00.htm',
    },
    {
      id: '1',
      name: 'Zaire Franklin',
      position: 'LB',
      plink: 'https://www.pro-football-reference.com/players/F/FranZa00.htm',
    },
    {
      id: '2',
      name: 'Jonathan Taylor',
      position: 'RB',
      plink: 'https://www.pro-football-reference.com/players/T/TaylJo02.htm',
    },
  ];
  rookies = [
    {
      id: '0',
      name: 'Laiatu Latu',
      position: 'DE',
      plink: 'https://www.pro-football-reference.com/players/L/LatuLa00.htm',
    },
    {
      id: '1',
      name: 'Adonai Mitchell',
      position: 'WR',
      plink:
        'https://www.pro-football-reference.com/players/M/MitcAd00.htm',
    },
    {
      id: '2',
      name: 'Tanor Bortolini',
      position: 'C',
      plink:
        'https://www.pro-football-reference.com/players/B/BortTa00.htm',
    },
  ];
  displayedColumns = ['Name', 'Position', 'Plink'];

  public imageObject: any;

  // QBStats sortable table
  qbstats: QBStat[] = require('../../../assets/data/qbstats.json');
  qbstatsP: QBStat[] = require('../../../assets/data/qbstatsp.json');
  //public isProjected: Boolean = false;
  displayedColumnsQBStats = ['QB', 'Att', 'CMPP', 'TDP', 'INTP', 'Rate', 'AYA'];

  qbstatsParsed: any;
  sortedDataCMPP: any = [];
  sortedDataTDP: any = [];
  sortedDataINTP: any = [];
  sortedDataRate: any = [];
  sortedDataAYA: any = [];
  sortedPDataCMPP: any = [];
  sortedPDataTDP: any = [];
  sortedPDataINTP: any = [];
  sortedPDataRate: any = [];
  sortedPDataAYA: any = [];

  sortData(sort: Sort) {
    //console.log('sortData: sort:', sort);
    //console.log('isProjected: ', isProjected);
    const dataAsc = this.qbstats.slice();
    const dataDesc = this.qbstats.slice();

    if (sort.active == 'CMPP') {
      if (sort.direction === 'asc') {
        this.sortedDataCMPP = dataAsc;
      } else {
        this.sortedDataCMPP = dataDesc;
      }

      this.qbstats = this.sortedDataCMPP;

      this.sortedDataCMPP = dataAsc.sort((a: any, b: any) => {
        return a.cmpp - b.cmpp;
      });

      this.sortedDataCMPP = dataDesc
        .sort((a: any, b: any) => {
          return a.cmpp - b.cmpp;
        })
        .reverse();
    }

    if (sort.active == 'TDP') {
      if (sort.direction === 'asc') {
        this.sortedDataTDP = dataAsc;
      } else {
        this.sortedDataTDP = dataDesc;
      }
      this.qbstats = this.sortedDataTDP;

      this.sortedDataTDP = dataAsc.sort((a: any, b: any) => {
        return a.tdp - b.tdp;
      });

      this.sortedDataTDP = dataDesc
        .sort((a: any, b: any) => {
          return a.tdp - b.tdp;
        })
        .reverse();
    }

    if (sort.active == 'INTP') {
      if (sort.direction === 'asc') {
        this.sortedDataINTP = dataAsc;
      } else {
        this.sortedDataINTP = dataDesc;
      }
      this.qbstats = this.sortedDataINTP;

      this.sortedDataINTP = dataAsc.sort((a: any, b: any) => {
        return a.intp - b.intp;
      });

      this.sortedDataINTP = dataDesc
        .sort((a: any, b: any) => {
          return a.intp - b.intp;
        })
        .reverse();
    }

    if (sort.active == 'Rate') {
      if (sort.direction === 'asc') {
        this.sortedDataRate = dataAsc;
      } else {
        this.sortedDataRate = dataDesc;
      }
      this.qbstats = this.sortedDataRate;

      this.sortedDataRate = dataAsc.sort((a: any, b: any) => {
        return a.rate - b.rate;
      });

      this.sortedDataRate = dataDesc
        .sort((a: any, b: any) => {
          return a.rate - b.rate;
        })
        .reverse();
    }

    if (sort.active == 'AYA') {
      if (sort.direction === 'asc') {
        this.sortedDataAYA = dataAsc;
      } else {
        this.sortedDataAYA = dataDesc;
      }
      this.qbstats = this.sortedDataAYA;

      this.sortedDataAYA = dataAsc.sort((a: any, b: any) => {
        return a.aya - b.aya;
      });

      this.sortedDataAYA = dataDesc
        .sort((a: any, b: any) => {
          return a.aya - b.aya;
        })
        .reverse();
    }
  }

  sortPData(sort: Sort) {
    //console.log('sortData: sort:', sort);
    //console.log('isProjected: ', isProjected);
    const dataAsc = this.qbstatsP.slice();
    const dataDesc = this.qbstatsP.slice();

    if (sort.active == 'CMPP') {
      if (sort.direction === 'asc') {
        this.sortedDataCMPP = dataAsc;
      } else {
        this.sortedDataCMPP = dataDesc;
      }

      this.qbstatsP = this.sortedDataCMPP;

      this.sortedDataCMPP = dataAsc.sort((a: any, b: any) => {
        return a.cmpp - b.cmpp;
      });

      this.sortedDataCMPP = dataDesc
        .sort((a: any, b: any) => {
          return a.cmpp - b.cmpp;
        })
        .reverse();
    }

    if (sort.active == 'TDP') {
      if (sort.direction === 'asc') {
        this.sortedDataTDP = dataAsc;
      } else {
        this.sortedDataTDP = dataDesc;
      }
      this.qbstatsP = this.sortedDataTDP;

      this.sortedDataTDP = dataAsc.sort((a: any, b: any) => {
        return a.tdp - b.tdp;
      });

      this.sortedDataTDP = dataDesc
        .sort((a: any, b: any) => {
          return a.tdp - b.tdp;
        })
        .reverse();
    }

    if (sort.active == 'INTP') {
      if (sort.direction === 'asc') {
        this.sortedDataINTP = dataAsc;
      } else {
        this.sortedDataINTP = dataDesc;
      }
      this.qbstatsP = this.sortedDataINTP;

      this.sortedDataINTP = dataAsc.sort((a: any, b: any) => {
        return a.intp - b.intp;
      });

      this.sortedDataINTP = dataDesc
        .sort((a: any, b: any) => {
          return a.intp - b.intp;
        })
        .reverse();
    }

    if (sort.active == 'Rate') {
      if (sort.direction === 'asc') {
        this.sortedDataRate = dataAsc;
      } else {
        this.sortedDataRate = dataDesc;
      }
      this.qbstatsP = this.sortedDataRate;

      this.sortedDataRate = dataAsc.sort((a: any, b: any) => {
        return a.rate - b.rate;
      });

      this.sortedDataRate = dataDesc
        .sort((a: any, b: any) => {
          return a.rate - b.rate;
        })
        .reverse();
    }

    if (sort.active == 'AYA') {
      if (sort.direction === 'asc') {
        this.sortedDataAYA = dataAsc;
      } else {
        this.sortedDataAYA = dataDesc;
      }
      this.qbstatsP = this.sortedDataAYA;

      this.sortedDataAYA = dataAsc.sort((a: any, b: any) => {
        return a.aya - b.aya;
      });

      this.sortedDataAYA = dataDesc
        .sort((a: any, b: any) => {
          return a.aya - b.aya;
        })
        .reverse();
    }
  }

  getBackgroundColor(row: any): string {
    // Set the rows to each teams uniform color
    if (row.qbstat_name == 'Richardson') {
      return '#003087';
    } else if (row.qbstat_name == 'Murray') {
      return '#97233F';
    } else if (row.qbstat_name == 'Jackson') {
      return '#241773';
    } else if (row.qbstat_name == 'Lawrence') {
      return '#9F792C';
    } else {
      return '#4B92DB';
    }
  }

  ngOnInit(): void {
    // console.log("qbstats: ", this.qbstats);
    this.imageObject = [
      {
        image: '../../assets/images/arichardson2.jpg',
        thumbImage: '../../assets/images/arichardson2.jpg',
        title: 'Anthony Richardson 2024 Colts QB',
      },
      {
        image:
          '../../assets/images/stats/2023/richardson_2023_pass_ratings_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/richardson_2023_pass_ratings_graph_img.svg',
        title: 'Richardson 2023 Passer Rating',
      },
      {
        image:
          '../../assets/images/stats/2022/ryan_2022_pass_ratings_graph_img.svg',
        thumbImage:
          '../../assets/images/stats/2022/ryan_2022_pass_ratings_graph_img.svg',
        title: 'Ryan 2022 Passer Rating',
      },
    ];
    this.sortData({ active: 'CMPP', direction: 'desc' });
  }
}
