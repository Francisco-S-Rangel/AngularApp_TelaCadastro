import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cadastro } from 'src/app/models/Cadastro';
import { ServidorCadastroService } from 'src/app/services/servidor-cadastro.service';

@Component({
  selector: 'app-telacadastro',
  templateUrl: './telacadastro.component.html',
  styleUrls: ['./telacadastro.component.css']
})
export class TelacadastroComponent implements OnInit {
  
  public cadastro: Cadastro;
  public telacadastroForm: FormGroup;
  constructor(private fb: FormBuilder,private cadastroService: ServidorCadastroService,
    private toastr : ToastrService) { 
    this.CriarForm();
  }

  ngOnInit() {
  }
  
  CriarForm(){
    this.telacadastroForm = this.fb.group({
      id: 0,
      UserName: ['',Validators.required],
      FullName: ['',Validators.required],
      Email: ['',Validators.required],
      BornDate: ['',Validators.required],
      Number: '',
      Password: ['',Validators.required],
      ConfirmPassword: ['',Validators.required]
    });
  }
  NovoCadastro(){
    console.log(this.telacadastroForm.value);
    if(this.telacadastroForm.value.Password === this.telacadastroForm.value.ConfirmPassword){
      this.SalvarCadastro(this.telacadastroForm.value);
    }else{
      this.toastr.error('Senhas diferentes !','Falha.');
    }
  }
  SalvarCadastro(cadastro: Cadastro){
      this.cadastroService.post(cadastro).subscribe(
        ()=>{
          this.toastr.success('Novo ususario cadastrado !','Sucesso.');
          this.CriarForm();
        },
        (erro: any)=>{
            console.log(erro);
            this.toastr.error('Certifique a informação inserida !','Falha');
        }
      );
  }

}
