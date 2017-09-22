import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MenuService } from 'app/providers/menu.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let comp: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
        const menuServiceStub = {
            fix: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ HeaderComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: MenuService, useValue: menuServiceStub }
            ]
        });
        fixture = TestBed.createComponent(HeaderComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('modal defaults to: false', () => {
        expect(comp.modal).toEqual(false);
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            spyOn(comp, 'jqueryMenu');
            comp.ngOnInit();
            expect(comp.jqueryMenu).toHaveBeenCalled();
        });
    });

    describe('jqueryMenu', () => {
        it('makes expected calls', () => {
            const menuServiceStub = fixture.debugElement.injector.get(MenuService);
            spyOn(menuServiceStub, 'fix');
            comp.jqueryMenu();
            expect(menuServiceStub.fix).toHaveBeenCalled();
        });
    });

});
