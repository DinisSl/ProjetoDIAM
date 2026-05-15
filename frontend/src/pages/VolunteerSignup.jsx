import { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";


//AINDA N ACABADO ESTÁ A DAR BAD REQUEST NAO CONSIGO REUTILIZAR SignUPForm porque preciso do campo role

const VOLUNTEERSIGNUPS_URL = "http://localhost:8000/race/api/volunteersignups/";

const ROLE_OPTIONS = [
  { value: "ENTREGA_DORSAIS", label: "Entrega de Dorsais" },
  { value: "APOIO_PARTIDA", label: "Apoio na Partida" },
  { value: "COACH_BANCADA", label: "Coach de Bancada" },
  { value: "ORIENTACAO", label: "Orientação" },
  { value: "ABASTECIMENTOS", label: "Abastecimentos" },
  { value: "SEGURANCA", label: "Segurança" },
  { value: "PRIMEIROS_SOCORROS", label: "Primeiros Socorros" },
  { value: "PACER", label: "Pacer" },
];

const VolunteerSignup = () => {
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const getCSRFToken = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("csrftoken="))
      ?.split("=")[1];
  };

  const handleVolunteerSignup = () => {
    if (!selectedRace || !selectedRole) return;

    axios
      .post(
        VOLUNTEERSIGNUPS_URL,
        {
          race: selectedRace,
          role: selectedRole,
        },
        {
          headers: {
            "X-CSRFToken": getCSRFToken(),
          },
          withCredentials: true,
        }
      )
      .then(() => {
        alert("Inscrição de voluntário submetida!");
      })
      .catch((error) => {
        console.error("Erro na inscrição:", error);
      });
  };

  return (
    <div>
      <Header />

      <div className="p-10 flex items-start justify-center gap-10">
        <SignupForm
          signupUrl={VOLUNTEERSIGNUPS_URL}
          title="Inscrição Voluntário"
        />

        <div className="flex flex-col gap-4 w-64">
          <label className="text-sm font-medium">Função de Voluntário</label>

          <Select onValueChange={setSelectedRole} value={selectedRole}>
            <SelectTrigger>
              <SelectValue placeholder="Escolhe uma função" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {ROLE_OPTIONS.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            onClick={handleVolunteerSignup}
            disabled={!selectedRace || !selectedRole}
          >
            Inscrever-me como voluntário
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VolunteerSignup;