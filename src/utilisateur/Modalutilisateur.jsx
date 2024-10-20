import React, { Component } from "react";

class Utilisateur2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="mt-5 d-flex justify-content-end ">
          <button
            type="button"
            className="btn  fw-medium  mb-2 text-white ajout"
            data-bs-toggle="modal"
            id="modal1"
            data-bs-target="#exampleModal"
          >
            Ajouter
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className=" container ">
                  <form id="form" method="post">
                    <div className="">
                      <div className="d-flex container gap-5">
                        <div className="mb-2 col-5">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label fw-medium"
                          >
                            Nom
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            id="membre_prenom"
                          />
                        </div>
                        <div className="mb-2 col-5">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label fw-medium"
                          >
                            Prénom
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            required
                            id="membre_nom"
                          />
                        </div>
                      </div>

                      <div className="d-flex container gap-5">
                        <div className="mb-2 col-5">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label fw-medium"
                          >
                            Date de naissance
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            required
                            id="membre_naissance"
                          />
                        </div>
                        <div className="mb-2 col-5">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label fw-medium"
                          >
                            Profession
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            required
                            id="membre_profession"
                          />
                        </div>
                      </div>
                      <div className="d-flex container gap-5">
                        <div class="mb-2 col-5">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label fw-medium"
                          >
                            E-mail
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            required
                            id="membre_email"
                          />
                        </div>
                        <div className="mb-2 col-5">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label fw-medium"
                          >
                            Téléphone
                          </label>
                          <input
                            type="number"
                            className="form-control "
                            required
                            id="membre_telephone"
                          />
                        </div>
                      </div>

                      <div className="d-flex container gap-5">
                        <div className="mb-2 col-5">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label fw-medium"
                          >
                            Adresse
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            id="membre_adresse"
                          />
                        </div>
                        <div className="mb-2 col-5">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label fw-medium"
                          >
                            Organisation
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            required
                            id="membre_organisation"
                          />
                        </div>
                      </div>

                      <div className="d-flex container justify-content-center">
                        <div className=" col-8">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label fw-medium"
                          >
                            Seuil
                          </label>
                          <input
                            type="number"
                            className="form-control "
                            required
                            id="membre_seuil"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="modal-footer d-flex justify-content-center"
                id="footer"
              >
                <button
                  type="button"
                  className="btn fw-bold col-5"
                  data-bs-dismiss="modal"
                  id="btn_ajou_membre"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Utilisateur2;
