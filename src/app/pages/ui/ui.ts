import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui.html',
  styleUrl: './ui.scss'
})
export class UiComponent {}
