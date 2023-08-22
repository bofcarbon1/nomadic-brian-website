import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  public imageObject: any;

  constructor() {}

  ngOnInit(): void {
    this.imageObject = [
      {
        image:
          '../../assets/images/stats/2023/team_off_div_2023_pass_yds_bar_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/team_off_div_2023_pass_yds_bar_img.svg',
        title: 'AFC South 2023 Team Passing Yards',
      },
      {
        image:
          '../../assets/images/stats/2023/team_off_div_2023_rush_yds_bar_img.svg',
        thumbImage:
          '../../assets/images/stats/2023/team_off_div_2023_rush_yds_bar_img.svg',
        title: 'AFC South 2023 Team Rushing Yards',
      },
    ];
  }
}
