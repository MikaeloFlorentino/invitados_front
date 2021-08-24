import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Invitados } from 'src/app/models/invitados-model';


@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent implements OnInit {

  public name: string = null;
  private parameterSubscription: any;
  invitado: Invitados;
  mensaje;
  nombreCompleto;
  numeroInvitado;
  mesa;
  invitadoDe;
  fechaConfimacion: Date;
  confirmaAsistencia;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.parameterSubscription = this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    

    this.cargaInvitado();
  }

  cargaInvitado(): void {

    const headers = { 
      'Access-Control-Allow-Origin': '*', 
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': '*/*'
    }

    this.http.get<Invitados>('https://examen.nariux.com/api/invitados/'+this.name, { headers } )
      .subscribe(response => {
      this.invitado = response;
      this.mensaje = this.invitado.mensaje;
      this.nombreCompleto = this.invitado.nombreCompleto;
      this.numeroInvitado = this.invitado.numeroInvitado;
      this.mesa = this.invitado.mesa;
      this.invitadoDe = this.invitado.invitadoDe;
      this.fechaConfimacion = this.invitado.fechaConfimacion;
      this.confirmaAsistencia = this.invitado.confirmaAsistencia;
    });
  }

  public participar() {
    const headers = { 
      'Access-Control-Allow-Origin': '*', 
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': '*/*'
    }

    const payload = {
      'id': this.invitado.id,
      'confirmaAsistencia': true
    };
 
    this.http.post<Invitados>('https://examen.nariux.com/api/invitados/confirmacion', payload, { headers } )
        .subscribe(response => {
          alert("Ah prro, traes el omnitrix!\nYa quedo el register,gracias!!\nNos vemos en corto");
     });
  }
 

}
