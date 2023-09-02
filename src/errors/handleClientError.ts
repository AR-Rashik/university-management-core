import { Prisma } from '@prisma/client';
import httpStatus from 'http-status';
import { IGenericErrorMessage } from '../interfaces/error';

const handleClientError = (error: Prisma.PrismaClientKnownRequestError) => {
  let errors: IGenericErrorMessage[] = [];
  let message = '';
  const statusCode = httpStatus.BAD_REQUEST;

  if (error.code === 'P2002') {
    message =
      (error.meta?.cause as string) || 'Unique key constraint violation!';
    errors = [
      {
        path: '',
        message,
      },
    ];
  } else if (error.code === 'P2025') {
    message = (error.meta?.cause as string) || 'Unknown argument!';
    errors = [
      {
        path: '',
        message,
      },
    ];
  } else if (error.code === 'P2026') {
    message = (error.meta?.cause as string) || 'Record not found!';
    errors = [
      {
        path: '',
        message,
      },
    ];
  } else if (error.code === 'P2016') {
    message = (error.meta?.cause as string) || 'Invalid field value!';
    errors = [
      {
        path: '',
        message,
      },
    ];
  } else if (error.code === 'P2013') {
    message = (error.meta?.cause as string) || 'Type mismatch!';
    errors = [
      {
        path: '',
        message,
      },
    ];
  } else if (error.code === 'P2003') {
    if (error.message.includes('delete()` invocation:')) {
      message = 'Delete failed';
      errors = [
        {
          path: '',
          message,
        },
      ];
    } else {
      message =
        (error.meta?.cause as string) || 'Foreign key constraint violation!';
      errors = [
        {
          path: '',
          message,
        },
      ];
    }
  } else if (error.code === 'P2010') {
    message = (error.meta?.cause as string) || 'Column not found!';
    errors = [
      {
        path: '',
        message,
      },
    ];
  } else if (error.code === 'P2027') {
    message = (error.meta?.cause as string) || 'Invalid connection!';
    errors = [
      {
        path: '',
        message,
      },
    ];
  } else if (error.code === 'P2009') {
    message =
      (error.meta?.cause as string) || 'Prisma client configuration error!';
    errors = [
      {
        path: '',
        message,
      },
    ];
  }

  return {
    statusCode,
    message,
    errorMessages: errors,
  };
};

export default handleClientError;

//"//\nInvalid `prisma.semesterRegistration.delete()` invocation:\n\n\nAn operation failed because it depends on one or more records that were required but not found. Record to delete does not exist.",
