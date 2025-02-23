import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { ItahunAkademik } from "../types";

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await prisma.tahun_akademik.findMany({
      relationLoadStrategy: "join",
      select: {
        id: true,
        tahun_mulai: true,
        tahun_selesai: true,
        fakultas: {
          select: {
            id: true,
            kode: true,
            nama_fakultas: true,
          },
        },
      },
    });

    if (result.length === 0) {
      res.status(200).json({ status: 201, message: "Data is Empty! ", data: null });
      return;
    }
    res.status(200).json({ status: 200, message: "success get tahun akademik", data: result });
  } catch (error) {
    const err = error as Error;
    res.status(200).json({ status: 500, message: err.message, data: null });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await prisma.tahun_akademik.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        tahun_mulai: true,
        tahun_selesai: true,
        fakultas: true,
      },
    });

    if (!result) {
      res.status(404).json({ status: 404, message: "tahun akademik not found", data: null });
      return;
    }

    res.json({ status: 200, message: "success get tahun akademik", data: result });
  } catch (error) {
    const err = error as Error;
    res.json({ status: 500, message: err.message, data: null });
  }
};

export const createData = async (req: Request, res: Response) => {
  try {
    const { tahun_mulai, tahun_selesai, fakultas_id } = req.body as ItahunAkademik;
    const result = await prisma.tahun_akademik.create({
      data: {
        tahun_mulai,
        tahun_selesai,
        fakultas_id,
      },
    });

    res.json({ status: 201, message: "success create tahun akademik", data: result });
  } catch (error) {
    const err = error as Error;
    res.json({ status: 500, message: err.message, data: null });
  }
};

export const updateData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { tahun_mulai, tahun_selesai, fakultas_id } = req.body as ItahunAkademik;
    const result = await prisma.tahun_akademik.update({
      where: {
        id: Number(id),
      },
      data: {
        tahun_mulai,
        tahun_selesai,
        fakultas_id,
      },
      select: {
        id: true,
        tahun_mulai: true,
        tahun_selesai: true,
      },
    });

    if (!result) {
      res.status(404).json({ status: 404, message: "tahun akademik not found", data: null });
      return;
    }

    res.json({ status: 200, message: "success update tahun akademik", data: result });
  } catch (error) {
    const err = error as Error;
    res.json({ status: 500, message: err.message, data: null });
  }
};

export const deleteData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await prisma.tahun_akademik.delete({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        tahun_mulai: true,
        tahun_selesai: true,
      },
    });

    if (!result) {
      res.status(404).json({ status: 404, message: "tahun akademik not found", data: null });
      return;
    }

    res.json({ status: 200, message: "success delete tahun akademik", data: result });
  } catch (error) {
    const err = error as Error;
    res.json({ status: 500, message: err.message, data: null });
  }
};
