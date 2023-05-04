<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;
use App\Models\Dossier;

class DossierCompleted extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */

    

    public function __construct( protected Dossier $dossier ,)
    {
           
    }


    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('salmasbaiti1@gmail.com', 'salma sbaiti'),
            
            subject: ' فتح ملف ',
        );
    }

    /**
     * Get the message content definition.
     * 
     */

    public function content(): Content
    {
        return new Content(
            view: 'emails.dossier_completed',
            with : [
                'code' => $this->dossier->code,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }

//     public function build()
// {
//     return $this->from('salmasbaiti1@gmail.com')
//                 ->view('emails.action_completed')
//                 ->with([
//                     'action' => $this->action,
//                 ]);
// }
}
