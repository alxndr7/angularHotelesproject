import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive( {
  selector: '[appCustomUsername]'
} )
export class AppCustomUsernameDirective {

  constructor( private element: ElementRef ) {
    console.log( this.element );
  }

  @HostListener( 'input', [ '$event' ] )
  onKeyDown( event: KeyboardEvent ) {
    // Cast to HTMLInputElement
    const input = event.target as HTMLInputElement;

    const cleanText = input.value.trim();

    if ( cleanText.length > 0 ) {
      input.value = cleanText.replace( /\s+/g, '-' );
    }
  }
}
