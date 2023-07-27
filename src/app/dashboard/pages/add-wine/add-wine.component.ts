import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, filter, map, of, switchMap, take, tap } from 'rxjs';
import { WineModel } from 'src/app/shared/models/wine.model';
import { WineService } from 'src/app/shared/services/wine.service';

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.component.html',
  styleUrls: ['./add-wine.component.scss'],
})
export class AddWineComponent implements OnInit {
  //TODO: this should be inside translations file
  readonly requiredLabel = 'The field is required.';
  isEditing: boolean = false;

  public wineForm = this.fb.group({
    id: this.fb.control(''),
    name: this.fb.control('', [Validators.required]),
    year: this.fb.control('', [Validators.required]),
    description: this.fb.control('', [Validators.required]),
    location: this.fb.control('', [Validators.required]),
    numberOfBottles: this.fb.control('', [Validators.required]),
    favorite: this.fb.control(false),
    imagePath: this.fb.control(''),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private wineService: WineService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        take(1),
        filter((params) => !!params['id']),
        map((params) => params['id']),
        switchMap((id) => this.wineService.getWine(id)),
        catchError(() => {
          console.log('Error getting wine');
          this.handleBack();
          return of();
        })
      )
      .subscribe((res) => {
        if (!res) {
          this.handleBack();
        } else {
          this.isEditing = true;
          this.setFormValues(res);
        }
      });
  }

  handleAdd(): void {
    if (this.wineForm.valid) {
      const wine = this.getModel();
      if (this.isEditing) {
        this.wineService
          .updateWine(wine)
          .pipe(take(1))
          .subscribe((res) => {
            if (res) {
              this.handleBack();
            }
          });
      } else {
        this.wineService
          .addWine(wine)
          .pipe(take(1))
          .subscribe((res) => {
            if (res) {
              this.handleBack();
            }
          });
      }
    }
  }

  handleBack(): void {
    this.router.navigateByUrl('/');
  }

  get title() {
    return this.isEditing
      ? `Edit wine ${this.wineForm.value.name}`
      : 'Add New Wine';
  }

  private getModel(): Partial<WineModel> {
    const {
      id,
      name,
      year,
      description,
      location,
      numberOfBottles,
      imagePath,
      favorite,
    } = this.wineForm.value;
    return {
      id: id ?? '',
      name: name ?? '',
      year: +(year ?? ''),
      description: description ?? '',
      location: location ?? '',
      numberOfBottles: +(numberOfBottles ?? ''),
      imagePath: imagePath ?? '',
      favorite: favorite ?? false,
    };
  }

  private setFormValues(model: WineModel) {
    this.wineForm.setValue({
      id: model.id,
      name: model.name,
      year: String(model.year),
      location: model.location,
      numberOfBottles: String(model.numberOfBottles),
      description: model.description,
      favorite: model.favorite,
      imagePath: model.imagePath,
    });
  }
}
