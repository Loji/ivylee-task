/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ListService } from './list.service';

describe('Service: List', () => {
  beforeEach(() => {
    addProviders([ListService]);
  });

  it('should ...',
    inject([ListService],
      (service: ListService) => {
        expect(service).toBeTruthy();
      }));
});
